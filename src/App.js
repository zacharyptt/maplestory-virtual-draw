import TextField from '@mui/material/TextField';
import React, {useEffect, useMemo, useRef, useState} from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import produce from 'immer';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Link from '@mui/material/Link';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import ReactGA from 'react-ga';
import data8614 from './drawData/data8614';
import dataDestiny from './drawData/dataDestiny';
import data8369 from './drawData/data8369';
const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    },
});

function App() {
    const [drawData, setDrawData] = useState([]);
    const formatData = (data) => {
        return data
            .trim()
            .split('\n')
            .map((value, index) => {
                const [name, chance] = value.split('\t');
                return {id: index, name, chance: parseFloat(chance.slice(0, -1))};
            });
    };
    const pSum = useMemo(
        () =>
            Math.round(drawData.reduce((previousValue, currentValue) => previousValue + currentValue.chance, 0) * 100) /
            100,
        [drawData]
    ); //總共
    const draw = () => {
        const random = Math.random();
        let count = 0;
        for (let i = 0; i < drawData.length; i++) {
            const thisData = drawData[i];
            if (random >= count && random <= count + thisData.chance / 100) {
                return i;
            } else {
                count = count + thisData.chance / 100;
            }
        }
    };
    const [resultList, setResultList] = useState([]);
    const [nums, setNums] = useState(1);
    const [text, setText] = useState('');
    const _bottom = useRef();
    const _scroll = useRef();

    useEffect(() => {
        // _bottom.current.scrollIntoView({behavior: 'smooth'});
        const scrollHeight = _scroll.current.scrollHeight;
        const height = _scroll.current.clientHeight;
        const maxScrollTop = scrollHeight - height;
        _scroll.current.scrollTop = maxScrollTop > 0 ? maxScrollTop : 0;
    }, [resultList]);
    useEffect(() => {
        // setDrawData(formatData(dataDestiny));
        // setDrawData(formatData(data8614));
        setDrawData(formatData(data8369));
    }, []);
    const average = useMemo(() => {
        if (resultList.length === 0) {
            return 0;
        }
        const sum = resultList.reduce((previousValue, currentValue) => previousValue + parseInt(currentValue), 0);
        return sum / resultList.length;
    }, [resultList]);
    return (
        <ThemeProvider theme={darkTheme}>
            <div>
                <CssBaseline />
                <Container sx={{marginTop: 10}}>
                    <Link
                        target="_blank"
                        rel="noopener"
                        href="https://tw.beanfun.com/beanfuncommon/EventAD_Mobile/EventAD.aspx?EventADID=5325"
                    >
                        楓之谷機率連結
                    </Link>
                    <Box sx={{marginTop: 2}}>
                        <Button
                            onClick={() => {
                                setDrawData(formatData(data8614));
                                setText('');
                                setResultList([]);
                            }}
                        >
                            模擬抽畫框
                        </Button>
                        <Button
                            onClick={() => {
                                setDrawData(formatData(dataDestiny));
                                setText('');
                                setResultList([]);
                            }}
                        >
                            模擬衝命運武器卷
                        </Button>
                        <Button
                            onClick={() => {
                                setDrawData(formatData(data8369));
                                setText('');
                                setResultList([]);
                            }}
                        >
                            模擬抽黃金蘋果（大獎輪迴碑石）
                        </Button>
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: {
                                xs: 'column-reverse',
                                sm: 'row',
                            },
                        }}
                    >
                        <Box sx={{display: 'flex', flexDirection: 'column', flex: 1}}>
                            <Box
                                sx={{
                                    display: 'flex',
                                    marginTop: 1,
                                }}
                            >
                                <TextField
                                    label="輸入抽獎資料"
                                    multiline
                                    maxRows={4}
                                    value={text}
                                    onChange={(event) => {
                                        setText(event.target.value);
                                    }}
                                />
                                <Button
                                    onClick={() => {
                                        if (text !== '') {
                                            setDrawData(formatData(text));
                                            setText('');
                                            setResultList([]);
                                        }
                                    }}
                                >
                                    設定
                                </Button>
                            </Box>
                            總機率：{pSum}%
                            <TableContainer component={Paper} sx={{marginTop: 2}}>
                                <Table>
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>獎項</TableCell>
                                            <TableCell align="right">機率</TableCell>
                                            <TableCell align="right">次數</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {drawData.map(({id, name, chance, count}) => (
                                            <TableRow key={id}>
                                                <TableCell>{name}</TableCell>
                                                <TableCell align="right">{chance}%</TableCell>
                                                <TableCell align="right">{count}</TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </Box>
                        <Box sx={{mx: 2}} />
                        <Box sx={{display: 'flex', flexDirection: 'column', flex: 1}}>
                            <Box sx={{display: 'flex', alignItems: 'center', marginTop: 1}}>
                                <TextField
                                    label="抽取次數"
                                    value={nums}
                                    onChange={(event) => {
                                        const value = event.target.value;
                                        if (/^[1-9]\d*$/.test(value) || value === '') {
                                            setNums(value);
                                        }
                                    }}
                                />
                                <Button
                                    onClick={() => {
                                        if (drawData.length === 0) {
                                            return;
                                        }
                                        for (let i = 0; i < nums; i++) {
                                            const resultIndex = draw();
                                            setResultList((value) => [...value, drawData[resultIndex].name]);
                                            setDrawData(
                                                produce((draft) => {
                                                    draft[resultIndex].count = (draft[resultIndex].count || 0) + 1;
                                                })
                                            );
                                        }
                                        ReactGA.event({category: 'User', action: 'draw'});
                                    }}
                                >
                                    抽
                                </Button>
                            </Box>
                            <Box sx={{flexDirection: 'row'}}>
                                <Typography>總數：{resultList.length}</Typography>
                                {!!average && <Typography>平均：{average}</Typography>}
                                <Button
                                    onClick={() => {
                                        setResultList([]);
                                        setDrawData((state) => state.map(({count, ...other}) => other));
                                    }}
                                >
                                    清除
                                </Button>
                            </Box>
                            <Paper
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    height: 500,
                                    overflow: 'auto',
                                    px: 5,
                                }}
                                ref={_scroll}
                            >
                                {resultList.slice(-100).map((value, index) => (
                                    <Box key={index} sx={{marginBottom: 1}}>
                                        {value}
                                    </Box>
                                ))}
                                <div ref={_bottom}></div>
                            </Paper>
                        </Box>
                    </Box>
                </Container>
            </div>
        </ThemeProvider>
    );
}
export default App;
