import create from 'zustand';

const useStore = create((set) => ({
  data: null,
  dataAsteroide:[],
  setData: (data) => set({ data }),
  setDataAsteroide: (dataAsteroide) => set({ dataAsteroide }),
}));

export default useStore;
