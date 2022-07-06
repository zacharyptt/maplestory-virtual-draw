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
// ReactGA.initialize('G-68SES6VVEW');
// console.log(window.location.pathname + window.location.search);
// ReactGA.pageview(window.location.pathname + window.location.search);
const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    },
});
const data8614 = `工匠方塊	20.00%
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
命運寵物裝備魔力卷軸	0.50%`;
const dataDestiny = `
+12	4%
+13	6%
+14	31%
+15	30%
+16	14%
+17	7%
+18	5%
+19	2%
+20	1%
`;
const data8369 = `
輪迴碑石	0.03%
漆黑的BOSS飾品碎片	6.00%
神秘冥界武器變換箱	0.30%
神秘冥界防具變換箱	0.30%
星力16星強化卷軸	0.50%
星力15星強化卷軸	0.50%
星力14星強化卷軸	0.50%
鈦之心	0.50%
精靈之心	0.50%
露希妲靈魂寶珠	0.30%
艾畢奈亞靈魂寶珠	0.30%
黃金鐵鎚100%	1.00%
附加潛在能力賦予卷軸70%	1.00%
睿智葫蘆	0.40%
航海師武器變換箱	0.55%
航海師防具變換箱	0.55%
航海師混合弓	0.15%
航海師強弩	0.15%
航海師雙弩槍	0.15%
航海師閃耀之杖	0.15%
航海師文字短杖	0.15%
航海師文字長杖	0.15%
航海師魔法護腕	0.15%
航海師扇子	0.15%
航海師ESP限制器	0.15%
航海師幻獸棒	0.15%
航海師死亡魔劍	0.15%
航海師軍刀	0.15%
航海師雙刃斧	0.15%
航海師十字錘	0.15%
航海師重劍	0.15%
航海師戰斧	0.15%
航海師戰錘	0.15%
航海師穿刺槍	0.15%
航海師戰戟	0.15%
航海師重拳槍	0.15%
航海師太刀	0.15%
航海師鎖鏈	0.15%
航海師短刀	0.15%
航海師雙刀	0.15%
航海師手杖	0.15%
航海師復仇拳套	0.15%
航海師能量劍	0.15%
航海師靈魂射手	0.15%
航海師能量劍	0.15%
航海師指虎	0.15%
航海師手槍	0.15%
航海師加農火砲	0.15%
航海師古代之弓	0.15%
航海師仙扇	0.15%
航海師調節器	0.15%
航海師武拳	0.15%
航海師龍息射手	0.15%
核心寶石20個交換券	1.50%
永遠的輪迴星火	1.30%
奧術之河水滴石	1.30%
太初的水滴石	1.30%
水中信紙眼飾	1.30%
凝聚力量的結晶石	1.30%
銀花戒指	1.30%
戴雅希杜斯耳環	1.30%
混沌闇黑龍王的項鍊	1.30%
金花草腰帶	1.30%
梅克奈特墜飾	1.30%
皇家暗黑合金護肩	1.30%
支配者墜飾	1.30%
星力13星強化卷軸	1.50%
星力12星強化卷軸	1.50%
水晶之心	1.50%
鋰之心	1.50%
航海師弓箭手斗篷	0.25%
航海師弓箭手手套	0.25%
航海師弓箭手鞋	0.25%
航海師弓箭手套裝	0.25%
航海師弓箭手護肩	0.25%
航海師弓箭手帽	0.25%
航海師法師斗篷	0.25%
航海師法師手套	0.25%
航海師法師鞋	0.25%
航海師法師套裝	0.25%
航海師法師護肩	0.25%
航海師法師帽	0.25%
航海師劍士斗篷	0.25%
航海師劍士手套	0.25%
航海師劍士鞋	0.25%
航海師劍士套裝	0.25%
航海師劍士護肩	0.25%
航海師劍士頭盔	0.25%
航海師盜賊斗篷	0.25%
航海師盜賊手套	0.25%
航海師盜賊鞋	0.25%
航海師盜賊套裝	0.25%
航海師盜賊護肩	0.25%
航海師盜賊帽	0.25%
航海師海盜斗篷	0.25%
航海師海盜手套	0.25%
航海師海盜鞋	0.25%
航海師海盜套裝	0.25%
航海師海盜護肩	0.25%
航海師海盜帽	0.25%
核心寶石15個交換券	1.40%
核心寶石10個交換券	1.40%
強力輪迴星火	1.40%
製作物品20格欄位包包	1.00%
製作書20格背包	1.00%
椅子20個欄位包包	1.00%
稱號 20格名片錢包	1.00%
卷軸20格背包	1.00%
回真卷軸50%	1.50%
稀有潛在能力卷軸80%	1.50%
幸運日卷軸	1.50%
機器人商店使用卷 (30天)	1.00%
初級能量硬幣(A級)	1.70%
微弱烙印的靈魂石	1.70%
星力11星強化卷軸	1.70%
星力10星強化卷軸	1.70%
選擇欄位8格擴充券	1.70%
黃金愛心	1.72%
經驗累積的秘藥	0.60%
獲得財物的秘藥	0.60%
忍耐的秘藥	0.60%
覺醒的秘藥	0.60%
無敵的秘藥	0.60%
最上級力量強化秘藥	0.60%
最上級智慧強化秘藥	0.60%
最上級敏捷強化秘藥	0.60%
最上級幸運強化秘藥	0.60%
傳說中的英雄秘藥	0.60%
傳說中的祝福秘藥	0.60%
最上級英雄的秘藥	0.60%
最上級祝福的秘藥	0.60%
核心寶石5個交換券	1.50%
核心寶石4個交換券	1.50%
核心寶石3個交換券	1.50%
核心寶石2個交換券	1.50%
核心寶石1個交換券	1.50%
皮卡啾的靈魂寶珠	1.30%
凡雷恩的靈魂寶珠	1.30%
搖滾精神的靈魂寶珠	1.30%
闇黑龍王的靈魂寶珠	1.30%
雷克斯的靈魂寶珠	1.30%
龍騎士的靈魂寶珠	1.30%
殘暴炎魔的靈魂寶珠	1.30%
亞尼的靈魂寶珠	1.30%
`;
function App() {
    const [drawData, setDrawData] = useState([]);
    const formatData = (data) => {
        return data
            .trim()
            .split('\n')
            .map((value) => {
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
