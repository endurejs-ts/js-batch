import fs from 'fs';

class Echo {
    static echo(message: string) {
        if (fs.existsSync("./dist/index.bat")) {
            return;
        }

        else {
            fs.writeFileSync("./dist/index.bat", `echo ${message}`, "utf-8");
        }

        console.log(message);
    }
}

class Batch {
    static echo = Echo;
}