const styles = theme => ({
    textfield: {
        margin: theme.spacing.unit
    },
    playerWrapper: {
        margin: 'auto',
        marginTop: '1rem',
        maxWidth: '90%',
        position: "relative",
        paddingTop: "56.25%" /* Player ratio: 100 / (1280 / 720) */
    },
    reactPlayer: {
        position: "absolute",
        top: 0,
        left: 0
    }
});

export default styles;
