import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
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
import React from "react";

export default function PasswordReset() {
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    };

    return (
        <Grid>
            <div
                style={{
                    // opacity: "80%",
                    fontWeight: "fontWeightBold",
                }}
            >
                <Paper
                    elevation={3}
                    sx={{
                        p: 4,
                        height: "45vh",
                        width: "290px",
                        m: "60px auto",
                        backgroundColor: "#ffffff",
                        // opacity: "60",
                    }}
                >
                    <Grid
                        container
                        direction="column"
                        justifyContent="flex-start" //多分、デフォルトflex-startなので省略できる。
                        alignItems="center"
                    >
                        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                            <LockOutlinedIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            パスワード再設定
                        </Typography>
                    </Grid>
                    <Box
                        component="form"
                        onSubmit={handleSubmit}
                        noValidate
                        sx={{ mt: 1 }}
                    >
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="メールアドレス"
                            name="email"
                            autoComplete="email"
                            autoFocus
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            送信
                        </Button>
                        <Grid container sx={{ justifyContent: "center" }}>
                            <Grid item>
                                <Link href="signin" variant="body2">
                                    戻る
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Paper>

                {/* {error && (
                    <Alert severity="error">
                    メールアドレスに送信できませんでした
                    </Alert>
                    )}
                {success && (
                    <Alert severity="success">メールアドレスに送信しました</Alert>
                )} */}
            </div>
        </Grid>
    );
}
