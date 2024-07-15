import { create } from "zustand";

import { INavigationStore } from "../models/zustand-model";

export const useNavigationStore = create<INavigationStore>((set) => ({
    isNavigating: true,
    setIsNavigating : (navigating:boolean) =>  set({isNavigating:navigating}),
}));
