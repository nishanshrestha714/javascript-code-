// import in file 
const fileupload= require ("./promise");

  fileupload (5000).then((fileSuccess)=>{
                console.log(fileSuccess);
            });
            fileupload (5000).catch((fileFail)=>{
                console.log(fileFail);
            });
