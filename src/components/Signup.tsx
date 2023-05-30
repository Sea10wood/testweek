// import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import MeetingRoomIcon from "@mui/icons-material/MeetingRoom";
import {
    Avatar,
    Box,
    Button,
    Grid,
    Paper,
    TextField,
    Typography,
} from "@mui/material";
import { teal } from "@mui/material/colors";
import Link from "next/link";
export default function Signup() {
    return (
        <Grid>
            <div style={{ opacity: "80%" }}>
                <Paper
                    elevation={3}
                    sx={{
                        p: 4,

                        height: "70vh",
                        width: "285px",
                        m: "60px auto",
                        backgroundColor: "center",
                    }}
                >
                    <Grid
                        container
                        direction="column"
                        justifyContent="flex-start" //多分、デフォルトflex-startなので省略できる。
                        alignItems="center"
                    >
                        <Avatar sx={{ bgcolor: teal[400] }}>
                            {/* <LockOutlinedIcon />  */}
                        </Avatar>
                        <Typography variant={"h5"} sx={{ m: "30px" }}>
                            Sign Up
                        </Typography>
                    </Grid>
                    <TextField
                        label="e-mail"
                        variant="standard"
                        fullWidth
                        required
                    />
                    <TextField
                        label="Username"
                        variant="standard"
                        fullWidth
                        required
                    />
                    <TextField
                        type="password"
                        label="Password"
                        variant="standard"
                        fullWidth
                        required
                    />
                    <TextField
                        type="password"
                        label="Confirm　password"
                        variant="standard"
                        fullWidth
                        required
                    />

                    <Box mt={3}>
                        <Button
                            type="submit"
                            color="primary"
                            variant="contained"
                            fullWidth
                        >
                            sign up
                        </Button>
                        {/* <Typography variant="caption">
                            <Link href="signin">SignInに戻る</Link>
                        </Typography>
                        <Grid container sx={{ justifyContent: "center" }}>
                            <Grid item>
                                <Link href="signin" variant="body2">
                                    SignInに戻る
                                </Link>
                            </Grid> */}
                        <Grid
                            container
                            sx={{
                                justifyContent: "right",
                                margin: "20px auto",
                            }}
                        >
                            <Link href="signin">
                                <MeetingRoomIcon></MeetingRoomIcon>
                            </Link>
                        </Grid>
                    </Box>
                </Paper>
            </div>
        </Grid>
    );
}
