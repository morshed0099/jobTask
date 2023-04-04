
      #### problems and solving explaining 


1.coming soon page default is missing (export default)

Solving Technique :  I just implement default and fix it.

2.hitToast hook argument send is not correct 

Problem : catch(() => hitToast('Something went wrong. Please try again.','error').

Solving Technique : change hitToast function parameter  and work well. 
 Example:  catch(() => hitToast( 'error','Something went wrong. Please try again.').

3.The api send email is not working.

Solving Technique :create expresjs server and mongodb database email collection then insert email. And finally expresjs server deploy on vercel for live support.
after inserting email successfully reset input field with form.reset().


4. The email validate function did not work fine so I am changing and modifying regex    validation.

 Solving technique : most of the painful problems were regexes to fix . delete trim method I    am using the test method. The alert-validation example email was user@email.domain, but when I am input without any number facing error. then i am modify regex delete number and facing another problem without number email was not facing problem, but when enter user1111@email.domain this kind of email with number regex create error then i am using 'or' || and create another regex and finally fix it .

5. modify counter page set end time, and  apply conditions. When the date is expired, counter disable and show the  h1 tag date is expired.

git repo link || live site link

Best Regards
Golam Morshed
+8801991394353
mdgolammorshed0099@gmail.com

    
    


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
