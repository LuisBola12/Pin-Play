import mixpanel from "mixpanel-browser"

mixpanel.init(process.env.REACT_APP_MIXPANEL_TOKEN,{
    persistence:"localStorage",
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
        FORGET_PASSWORD:"FORGET_PASSWORD",
        REGISTER_USER:"REGISTER_USER",
        GO_TO_TOURNEYS:"GO_TO_TOURNEYS",
        GO_TO_PLAYERS:"GO_TO_PLAYERS",
        GO_TO_CLASIFICATION:"GO_TO_CLASIFICATION",
        VIEW_TOURNAMENTS:"CHANGE_TOURNAMENT_CATEGORY",
        VIEW_CLASIFICATION:"CHANGE_CLASIFICATION_CATEGORY",
        SEARCH_PLAYER:"SEARCH_PLAYER",
        CREATE_TOURNEY:"CREATE_TOURNEY",
    }
}
export default Mixpanel;