import { makeStyles } from "@mui/styles";

const alertMessageStyle = makeStyles(() => ({
    root: {

        '& .MuiPaper-root': {
            borderRadius: "3px",
            // backgroundColor: "#fff",
        },

        '& .MuiAlert-standardError': {
            boxShadow: "0 2px 8px 0 rgba(0, 0, 0, 0.25)",
            border: "solid 1px #eb0029",
            // color: "#eb0029",
            color: "white",
            backgroundColor: "#eb0029",

            '& .MuiAlert-icon': {
                color: 'white',
            },

        },

        '& .MuiAlert-standardSuccess': {
            boxShadow: '0 2px 8px 0 rgba(0, 0, 0, 0.25)',
            border: 'solid 1px #1a9b06',
            color: "white",
            backgroundColor: "#1a9b06",

            '& .MuiAlert-icon': {
                color: 'white',
            },

        },

        '& .MuiAlert-standardWarning': {
            boxShadow: '0 2px 8px 0 rgba(0, 0, 0, 0.25)',
            border: 'solid 1px #f8ad08',
            color: "white",
            backgroundColor: "#f8ad08",

            '&.MuiAlert-icon': {
                color: 'white',
            },

        },

        '& .MuiAlert-standardInfo': {
            boxShadow: '0 2px 8px 0 rgba(0, 0, 0, 0.25)',
            border: 'solid 1px #1825aa',
            color: "white",
            backgroundColor: "#1825aa",

            '&.MuiAlert-icon': {
                color: 'white',
            },
        }

    }
})) as Function;

export default alertMessageStyle;