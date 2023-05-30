// import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import {
    Avatar,
    Box,
    Button,
    Grid,
    Link,
    Paper,
    TextField,
    Typography,
} from "@mui/material";
import { teal } from "@mui/material/colors";
export default function Signin() {
    return (
        <Grid>
            <div style={{ opacity: "80%", fontWeight: "fontWeightBold" }}>
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
                            {/* <LockOutlinedIcon /> */}
                        </Avatar>
                        <Typography variant={"h5"} sx={{ m: "30px" }}>
                            Sign In
                        </Typography>
                    </Grid>
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

                    <Box mt={3}>
                        <Button
                            type="submit"
                            color="primary"
                            variant="contained"
                            fullWidth
                        >
                            sign in
                        </Button>

                        <Typography variant="caption">
                            <Link href="password">
                                パスワードを忘れましたか？
                            </Link>
                        </Typography>
                        <Typography variant="caption" display="block">
                            <Link href="/signup">アカウントを作成</Link>
                        </Typography>
                    </Box>
                </Paper>
            </div>
        </Grid>
    );
}
