import {
    Button,
    Box
} from "@mui/material";
import { FC } from "react";

interface ISaveAction {
    callback: () => void;
}
const SaveAction: FC<ISaveAction> = (props) => {

    const { callback } = props;
    
    return (
        <Box sx={{ display: "flex", justifyContent: "end" }}>
            <Button
                color='inherit'
                size="large"
                sx={{ marginTop: 1, mr: 4 }}
                onClick={callback}
            >
                Cancelar
            </Button>

            <Button
                variant="contained"
                type="submit"
                size="large"
                sx={{ marginTop: 1 }}
            >
                Salvar
            </Button>
        </Box>
    );
}

export default SaveAction;