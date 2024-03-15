const CardAnimation = {
    baseStyle: {
        transition: "all 0.3s ease",
        background: "#bfbfbf",
        opacity: .3,
        width: "0%",
        _hover: {
            width: "100%",
        },
        transitionDuration: ".2s, .2s, .35s",
        transitionProperty: "top, bottom, width",
        transitionTimingFunction: "linear, linear, ease",
    },
};

export const CardComponent = {
    components: {
        CardAnimation,
    },
};
