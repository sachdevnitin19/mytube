# **Mytube**

Mytube is a video streaming single page webapp which is implemented using MEAN (MongoDB,ExpressJS,AngularJS,NodeJS) stack. User can upload videos and it can delete the videos which it has uploaded into the cloud. For uploading videos "Filestack" service is used.   
User can only upload .mp4 format videos. 
"Filepicker", an angularjs module is used in the frontend so that user can upload videos to filestack cloud.

MongoDb stores basic users information. Also it stores CDN links of videos which the filestack returns after uploading the video on cloud. 
