const requestCameraPermission = async () => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
      {
        title: "Allow Permission",
        message:
          "HooD Needs the directory acccess " +
          "to search for all the music files.",
        buttonNeutral: "Ask Me Later",
        buttonNegative: "Cancel",
        buttonPositive: "OK"
      }
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log("You can use the file system");
    } else {
      console.log("File System permission denied");
    }
  } catch (err) {
    console.warn(err);
  }
};