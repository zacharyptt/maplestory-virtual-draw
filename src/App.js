import TextField from '@mui/material/TextField';
import React, {useEffect, useRef, useState} from 'react';
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
const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    },
});
function App() {
    const [drawData, setDrawData] = useState([]);
    const formatData = (data) => {
        return data.split('\n').map((value) => {
            const [name, chance] = value.split('\t');
            return {name, chance: parseFloat(chance.slice(0, -1))};
        });
    };
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
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: {
                                xs: 'column-reverse',
                                sm: 'row',
                                // md: 'column-reverse',
                                // lg: 'column-reverse',
                                // xl: 'column-reverse',
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
                                <Button
                                    onClick={() => {
                                        setDrawData(
                                            formatData(`工匠方塊	20.00%
                                    名匠方塊	2.50%
                                    完美烙印的印章	5.00%
                                    白金鎚子	5.00%
                                    卷軸20格欄位背包	4.00%
                                    性向成長密藥	6.00%
                                    選擇欄8格擴充券	5.50%
                                    特殊名譽勳章	5.00%
                                    200靈魂卷軸100%	3.00%
                                    純白的卷軸100%	5.00%
                                    恢復卡交換券	3.00%
                                    回真卷軸100%	4.00%
                                    V單手武器攻擊力卷軸	2.00%
                                    V單手武器魔力卷軸	2.00%
                                    V雙手武器攻擊力卷軸	2.00%
                                    V雙手武器魔力卷軸	2.00%
                                    V防具攻擊力卷軸	2.00%
                                    V防具魔力卷軸	2.00%
                                    V裝飾品攻擊力卷軸	2.00%
                                    V裝飾品魔力卷軸	2.00%
                                    V寵物裝備攻擊力卷軸	2.00%
                                    V寵物裝備魔力卷軸	2.00%
                                    究極黑暗雙手武器攻擊力卷軸	0.70%
                                    究極黑暗雙手武器魔力卷軸	0.70%
                                    究極的黑暗單手武器攻擊力卷軸	0.70%
                                    究極的黑暗單手武器魔力卷軸	0.70%
                                    究極的黑暗飾品攻擊力卷軸	0.70%
                                    究極的黑暗飾品魔力卷軸	0.70%
                                    究極的黑暗防具攻擊力卷軸	0.70%
                                    究極的黑暗防具魔力卷軸	0.70%
                                    究極的黑暗寵物裝備攻擊力卷軸	0.70%
                                    究極的黑暗寵物裝備魔力卷軸	0.70%
                                    命運單手武器攻擊力卷軸	0.50%
                                    命運單手武器魔力卷軸	0.50%
                                    命運雙手武器攻擊力卷軸	0.50%
                                    命運雙手武器魔力卷軸	0.50%
                                    命運飾品攻擊力卷軸	0.50%
                                    命運飾品魔力卷軸	0.50%
                                    命運防具攻擊力卷軸	0.50%
                                    命運防具魔力卷軸	0.50%
                                    命運寵物裝備攻擊力卷軸	0.50%
                                    命運寵物裝備魔力卷軸	0.50%`)
                                        );
                                        setText('');
                                        setResultList([]);
                                    }}
                                >
                                    設定為畫框資料
                                </Button>
                            </Box>
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
                                        {drawData.map(({name, chance, count}) => (
                                            <TableRow key={name}>
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
                                    }}
                                >
                                    抽
                                </Button>
                            </Box>
                            <Box sx={{flexDirection: 'row'}}>
                                <Typography>總數：{resultList.length}</Typography>
                                <Button
                                    onClick={() => {
                                        setResultList([]);
                                        setDrawData((state) => state.map(({name, chance}) => ({name, chance})));
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
                                {resultList.map((value, index) => (
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
