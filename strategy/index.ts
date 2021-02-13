import BasicCameraApp from "./BasicCameraApp";
import CameraPlusApp from "./CameraPlusApp";

const main = () => {
  console.log("Welcome");

  const basicApp = new BasicCameraApp();
  const camPlusApp = new CameraPlusApp();

  console.log("\tBasic Cam App - Start");
  console.log(basicApp.edit());
  console.log(basicApp.take());
  console.log(basicApp.share());
  console.log("\tBasic Cam App - End\n");

  console.log("\tCam + App - Start");
  console.log(camPlusApp.edit());
  console.log(camPlusApp.take());
  console.log(camPlusApp.share());
  console.log("\tCam + App - End\n");
};

main();
