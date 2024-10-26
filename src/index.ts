import fs from 'fs';

class Echo {
    static echo(message: string) {
        const filePath = "../dist/index.bat";
        
        if (fs.existsSync(filePath)) {
            const fileContent = fs.readFileSync(filePath, "utf-8");
            if (fileContent.includes(`echo ${message}\n`)) {
                return;
            }
        } else {
            fs.writeFileSync(filePath, "@echo off\n", "utf-8");
        }

        fs.appendFileSync(filePath, `echo ${message}\n`, "utf-8");
        console.log(message);
    }

    echo(message: string) {
        const filePath = "../dist/index.bat";
        
        if (fs.existsSync(filePath)) {
            const fileContent = fs.readFileSync(filePath, "utf-8");
            if (fileContent.includes(`echo ${message}\n`)) {
                return;
            }
        } else {
            fs.writeFileSync(filePath, "@echo off\n", "utf-8");
        }

        fs.appendFileSync(filePath, `echo ${message}\n`, "utf-8");
        console.log(message);
    }

    static off() {
        const filePath = "../dist/index.bat";
        
        if (fs.existsSync(filePath)) {
            const fileContent = fs.readFileSync(filePath, "utf-8");
            if (fileContent.includes("@echo off\n")) {
            }
        }

        fs.appendFileSync(filePath, "@echo off\n", "utf-8");
    }

    off() {
        const filePath = "../dist/index.bat";
        
        if (fs.existsSync(filePath)) {
            const fileContent = fs.readFileSync(filePath, "utf-8");
            if (fileContent.includes("@echo off\n")) {
                return;
            }
        }

        fs.appendFileSync(filePath, "@echo off\n", "utf-8");
    }
}

class Set {
    static set(variableRecord: Record<string, any>) {
        const filePath = "../dist/index.bat";
        
        if (!fs.existsSync(filePath)) {
            fs.writeFileSync(filePath, "@echo off\n", "utf-8");
        }

        // 변수들을 파일에 set VAR_NAME=VAR_VALUE 형태로 추가
        for (const [key, value] of Object.entries(variableRecord)) {
            const setLine = `set ${key}=${value}\n`;

            // 파일의 내용을 확인하여 중복된 변수가 있는지 검사
            const fileContent = fs.readFileSync(filePath, "utf-8");
            if (fileContent.includes(setLine)) {
                throw new Error(`The variable "${key}" is already set to "${value}".`);
            }

            fs.appendFileSync(filePath, setLine, "utf-8");
        }
    }
}

class Batch {
    static echo = Echo;
    static set = Set;
}

export { Batch as batch };
