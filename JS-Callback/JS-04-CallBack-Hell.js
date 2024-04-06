// Todo : Download file from a url.

function download(url, fn) {
    console.log("Started Downloading from : ", url);

    setTimeout(function () {
        console.log("Download Complete");
        let downloadedFile = "Doraemon Movie";
        fn(downloadedFile);
        console.log("Coming out from setTimeOut of download function");
    }, 5000);
}

// Todo : Save downloaded file and return the name of the file in which it saved.
function saveFile(fileToSave, fn) {
    console.log("Saving file started!");

    setTimeout(function () {
        console.log("Succesfully Saved!");
        let nameOfSavedFile = "Steel Troops Movie";
        fn(nameOfSavedFile);
        console.log("Coming out from setTimeOut of saveFile function");
    }, 2000)
}

// Todo : Upload file at a given url and return a success message.
function uploadFile(fileToUpload, urlAtUpload, fn) {
    console.log("File uploading started!");

    setTimeout(function () {
        console.log("File uploaded at : ", urlAtUpload);
        let message = "Everything done";
        fn(message);
        console.log("Coming out from setTimeOut of uploadFile function");
    }, 7000)
}

download("www.google.com", function (responseFromDownload) {
    console.log(responseFromDownload);

    saveFile(responseFromDownload, function (responseFromSaveFile) {
        console.log(responseFromSaveFile);

        uploadFile(responseFromSaveFile, "www.youtube.com", function (successMessage) {
            console.log(successMessage);
        })
    })
})