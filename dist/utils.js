export var State;
(function (State) {
    State[State["STARTED"] = 0] = "STARTED";
    State[State["STOPPED"] = 1] = "STOPPED";
})(State || (State = {}));
;
export const getVelocity = () => {
    let xMultiplier = 1;
    let yMultiplier = 1;
    if (Math.random() < 0.5) {
        xMultiplier = -1;
    }
    if (Math.random() < 0.5) {
        yMultiplier = -1;
    }
    return {
        x: xMultiplier * (3 + Math.floor(Math.random() * (8 - 3 + 1))),
        y: yMultiplier * (3 + Math.floor(Math.random() * (8 - 3 + 1)))
    };
};
