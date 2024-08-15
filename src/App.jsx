import "./App.css";
import { sculptureList } from "./assets/data.json";
import { useState, useCallback } from "react";

import {
  Card,
  Typography,
  CardContent,
  CardActions,
  Button,
  Grid,
  Slide,
  Collapse,
} from "@mui/material";

import "@fontsource/roboto";

export default function App() {
  const [index, setIndex] = useState(0);
  const [checked, setChecked] = useState(true);

  const onButton = useCallback(() => {
    setChecked(false);
    setTimeout(() => {
      const newIndex = Math.floor(Math.random() * sculptureList.length);
      setIndex(newIndex);
      setChecked(true);
    }, 300); // 设置动画持续时间300ms，使整个动画连贯
  }, []);
  const currentSculpture = sculptureList[index];

  return (
    <Slide direction="up" in mountOnEnter unmountOnExit>
      <Grid container justifyContent="center" sx={{ mt: 4 }}>
        <Collapse in={checked} timeout={300}>
          <Card sx={{ minWidth: 275, maxWidth: 600 }}>
            <CardContent>
              {/* title */}
              <Typography variant="h5" component="div">
                {currentSculpture.name}
              </Typography>
              {/* artist */}
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                {currentSculpture.artist}
              </Typography>
              {/* description */}
              <Typography sx={{ mb: 1.5 }} variant="body1" gutterBottom>
                {currentSculpture.description}
              </Typography>
            </CardContent>
            <CardActions>
              <Button onClick={onButton} variant="contained" color="success" size="medium">
                刷新
              </Button>
            </CardActions>
          </Card>
        </Collapse>
      </Grid>
    </Slide>
  );
}
