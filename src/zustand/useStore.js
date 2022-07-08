import create from 'zustand';
import {persist} from 'zustand/middleware';
import {immer} from 'zustand/middleware/immer';
const useStore = create(
    persist(
        immer((set, get) => ({
            nowDataKey: 'data8369',
            drawNums: 1,
            drawData: [],
            navList: [],
            resultList: [],
            text: '',
            cleanResult: () =>
                set((state) => ({
                    text: '',
                    resultList: [],
                    drawData: state.drawData.map(({count, ...other}) => other),
                })),
            grabNavListLoading: false,
            grabData: {},
            experimentMode: false,
            setZState: (value) => set(value),
            getRandomIndexFromDrawData: () => {
                const random = Math.random();
                let count = 0;
                for (let i = 0; i < get().drawData.length; i++) {
                    const thisData = get().drawData[i];
                    if (random >= count && random <= count + thisData.chance / 100) {
                        return i;
                    } else {
                        count = count + thisData.chance / 100;
                    }
                }
            },
            draw: () => {
                if (get().drawData.length === 0) {
                    return;
                }
                for (let i = 0; i < get().drawNums; i++) {
                    const resultIndex = get().getRandomIndexFromDrawData();
                    if (resultIndex === undefined) {
                        //機率未滿100% 沒抽到東西時
                        set((state) => ({
                            resultList: [...state.resultList, '沒抽到'],
                        }));
                        continue;
                    }
                    set((state) => ({
                        resultList: [...state.resultList, get().drawData[resultIndex].name],
                    }));
                    set((draft) => {
                        draft.drawData[resultIndex].count = (draft.drawData[resultIndex].count || 0) + 1;
                    });
                }
            },
        }))
    ),
    {
        name: 'app-storage',
    }
);
export default useStore;
