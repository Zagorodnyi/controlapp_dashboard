export default (theme) => ({
    block: {
        width: '600px',
        gridColumn: '1/3',
        minHeight: '20vh',
        display: "flex",
        justifyContent: 'center',
        alignItens: 'center',
        flexDirection: 'column',
        textAlign: 'center'
    },

    "@media screen and (max-width: 700px)": {
        block: {
            width: '90%',
            gridColumn: '1/1',
            gridRow: 2
        }
    },

    select: {
        margin: "0 auto",
        width: '50%'
    },

    deviceSettings: {
        width: '100%',
    },

    list: {
        width: '100%'
    }
})