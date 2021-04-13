import { parse, join } from "path";
import { createWriteStream } from "fs";
import { ENV } from "../../Config/index";
export default {
  Mutation: {
    fileUploader: async (parent: any, { file }: any) => {
      try {
        let { filename, createReadStream } = await file;

        const stream = createReadStream();
        let { ext, name }: { ext: any; name: string } = parse(filename);

        name = name.replace(/([^0-9a-z]+)/gi, "-").replace(" ", "_");

        let serverFile = join(
          __dirname,
          `../../uploads/${name}-${Date.now()}${ext}`
        );

        let writeStream = await createWriteStream(serverFile);
        await stream.pipe(writeStream);

        console.log(ENV.URL);
        serverFile = `${ENV.URL}${serverFile.split("uploads")[1]}`;

        return {
          pathname: serverFile,
        };
      } catch (error) {
        console.log(error);
      }
    },
  },
};
