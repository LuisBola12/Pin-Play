import mixpanel from "mixpanel-browser"

mixpanel.init(process.env.REACT_APP_MIXPANEL_TOKEN,{
    persistence:"localstorage",
    secure_cookie:true,
})

const Mixpanel = {
    identify: (id) =>{
        mixpanel.identify(id);
    },
    alias: (id) => {
        mixpanel.alias(id);
    },
    track: (name,props) =>{
        mixpanel.track(name,props);
    },
    people:{
        set: (props) =>{
            mixpanel.people.set(props);
        }
    },
    TYPES:{

    }
}
export default Mixpanel;