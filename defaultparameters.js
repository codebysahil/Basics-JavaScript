function launchBrowser(browserName= 'chrome'){

    switch(browserName){
        case 'firefox':
            console.log("launch firefox");
            break;
        case 'edge':
            console.log("launch edge");
            break;
        case 'chrome':
            console.log("launching the default browser chrome");
            break;
        default:
            console.log('invalid browsername and still using chrome');
            break;
    }
}

launchBrowser('opera');
launchBrowser('edge');
