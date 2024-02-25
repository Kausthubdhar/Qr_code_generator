import qr from "qr-image";
import inquirer from "inquirer";
import fs from "fs";

inquirer
    .prompt([{
        message:"Enter the URL: ",
        name: "URL"
    }])
    .then((answer) => {
        const url = answer.URL;
        var qr_png = qr.image(url);
        qr_png.pipe(fs.createWriteStream("qr_image.png"));

        fs.writeFile("URL.txt",url,(err)=>{
            if(err) throw err;
            console.log("File has been saved!!");
        });
    })
    .catch((error) =>{
        console.error("An error occured: ",error);
    })
