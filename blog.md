# Integrating Cloudinary Video Player into a React Application

As of this writing [npm trends](https://www.npmtrends.com/react) reports over 10,000 daily downloads of the React library. The [disruption created by Covid in 2020](https://www.weforum.org/agenda/2020/05/coronavirus-covid19-consumers-shopping-goods-economics-industry) is expected to persist.  This disruption created consumer demand for video to improve work, shopping, education, healthcare, social intercourse,  and entertainment.

It's not surprising that questions arise about how to add a video player to a React application.  We'll look at 5 ways to host video with the Cloudinary Video player in a React Component.

## Cloudinary Video Player

The Cloudinary Video Player is a feature enhanced library that builds upon the popular, open source [Video JS](https://videojs.com/) player.  Like the Video JS player, it is implemented on a web page by rendering a video tag and then binding Javascript and CSS functionality to the video DOM element.

Cloudinary adds a number of features to the video playing experience including:
 
 - Video manipulations using Cloudinary Video Transformations at the player or video level

 - Multiple players per page including playlists created by meta data tagging

 - Cloudinary auto formatting transformations so that video is served in the best format for the device or browser on which it is served

 - Adaptive Bit Rate Streaming suggested for videos longer than 1 minute to provide HTTP streaming and optimize video resolution in unstable networks

 - Customization

 - Recommendations lists

 - Monetization through interstitial ads

 - Shoppable Video

 - Analytics

 See [Cloudinary Documentation](https://cloudinary.com/documentation/cloudinary_video_player#video_player_features) for more information about these features.

 ## Cloudinary Video Player Libraries

 There are 2 Video Player libraries available: [**Standard** and **Light**](https://cloudinary.com/documentation/cloudinary_video_player#installation_and_setup).  The Light library is smaller as it does not include the following features: Adaptive Bitrate Streaming,  Video Ads and Shoppable videos.  In this exercise, we'll be using the **Light** version.

 In addition to the [Video Player](https://www.npmjs.com/package/cloudinary-video-player) library, we'll add the [Cloudinary Core](https://www.npmjs.com/search?q=cloudinary-core) library which is required and supports core Cloudinary functionality like transformations.

 Bundle analyzer visualizations provide a look at the JavaScript weight for each alternative.

### Bundle with light option
 ![Light bundle](./bundle-light.png "Light Bundle")

 ### Bundle with standard option
 ![Standard bundle](./bundle-standard.png "Standard Bundle")

## React Components

### JavaScript Challenges
The JavaScript language has presented challenges for developers since its inception. Essentially a functional language created to support asynchronous human interaction in a secured container, it has become the imperative "language of the web".  It is sometimes pointed out that the influential book that describes best practices for using the language, [JavaScript the Good Parts](https://www.oreilly.com/library/view/javascript-the-good/9780596517748/), is only 176 pages - and that includes index and appendices.  [Effective Java](https://www.amazon.com/Effective-Java-Joshua-Bloch/dp/0134685997/ref=sr_1_1?dchild=1&keywords=effective+java&qid=1613327876&s=books&sr=1-1), which was similar in helping programmers to better understand how to use the language for which JavaScript's name was derived, was 414 pages.

### Class Based Components

Originally React components were class based using [ES6 classes](https://caniuse.com/es6).  ES6 classes allow us to encapsulate data and functions similar to the way it would be done in an Object Oriented language like Java.  Problems arise in JavaScript context, [`this`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this), was historically bound to human interaction and did not always behave as desired.  React now provides a function based approach to creating components. 

In order to bind code to DOM nodes, JavaScript code must "listen" for the rendering of the nodes.  Class based components are provided notice of events like this using lifecycle hooks like `componentDidMount`.  Code placed in a function like this won't be executed until the HTML provided in the component is actually rendered.  

**The Video Player code cannot be bound to the video tag until the video tag is rendered**.

### React Hooks

Functional components run into problems spreading logic over  lifecycle hooks.  The development of [React Hooks](https://reactjs.org/docs/hooks-intro.html) was prompted by these issues arising from Class base components.  React hooks can hold state and logic, without using the keyword `this`.  Hooks can be imported into Component code and changes in state can cause the re-rendering of the component to reflect updated state.  As with any functional language, state is immutable.

You can spot a React hook in React code because the convention is to name a function as **use** *Something stateful*.  We'll use the following hooks provided by React:

- useState  
  Function that returns an immutable data value and a setter that can be used to update it. 
- useEffect  
  Function that is called once when the component that holds it is rendered and then when any stateful data within it changes. This is helpful for determining that a component has been rendered and in some respect substitutes for the `componentDidMount` and `compoonentDidUpdate` life cycles in a Class function.
- useContext 
  This function serves as a container for stateful values.  It can be passed into a component function to provide state.  It defines a provider function made up of useState functions.  Having the ability to share context between components is one way to help with inter-component communication.

We'll also create a custom hook.  Custom hooks are useful for refactoring stateful code that could be reused in many components.



## Exploring Code

We're going to look at how to host the Cloudinary Video Player with in each of the following components:

- Function based component with iframe for embedded cloud hosted video player 
- Class based component
- Function based based with useHooks
- Function based component with Context
- Custom hook `useVideoPlayer` that can be used in any component that hosts video

## App.js

The external data for all of the components is defined in `App.js`.  An object called video options contains the cloudName and publicId.

```JavaScript
  const videoOptions = { cloudName: "demo", publicId: "race_road_car" };

```

### Function based Cloud Hosted Video Player

Cloudinary provides a [demo page](https://studio.cloudinary.com/) where you can experiment with Video Player options.  Once you are satisfied with the features you have selected, the demo will provide the JavaScript or an embeddable `iframe` with the options set for hosting in the cloud.  With this options, you will get a URL with all of the settings including the 2 pieces of data that are required for specifying an asset in Cloudinary; cloud name and the asset's public id.


In the Apps.js you'll find the component JSX for rendering a card containing the name of the component and the video player hosting the video specified in video options.  In this case we have a component named `VideoPlayerCloudHosted`.

```JavaScript
{
  <div className="video-card">
    <h2>Video Player Cloud Hosted</h2>
    <div className="vp">
      <VideoPlayerCloudHosted options={videoOptions} />
    </div>
  </div>
}
```

In the code below you can see the URL provided to the `src` attribute contains cloud name and public id as well as all of the options obtained from the Video Player demo page.

In this code cloud name and public id are supplied to the component using `props` passed in from the parent.

```JavaScript
import React from "react";

function VideoPlayerCloudHosted(props) {
  return (
    <>
      <iframe
        title="Video Player Cloud Hosted"
        src={`https://player.cloudinary.com/embed/?cloud_name=${props.options.cloudName}&public_id=${props.options.publicId}&&player%5Bfluid%5D=true&player%5Bcontrols%5D=true&player%5Bcontrol_bar%5D%5Bvolume_panel%5D=false&player%5Bcontrol_bar%5D%5Bfullscreen_toggle%5D=false&player%5Bposter_options%5D%5Btransformation%5D%5Bstart_offset%5D=0`}
        allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
        allowfullscreen
        frameborder="0"
      ></iframe>
    </>
  );
}

export default VideoPlayerCloudHosted;
```

All we are doing in this functional component is rendering the iframe.

### Class Based Component


