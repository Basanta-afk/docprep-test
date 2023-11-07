import { IBfiAdmin } from "@/utils/interface/admin/bfi";
import { create } from "zustand";

interface IAdminBfiStoreType {
  bfi: IBfiAdmin;
  setBfi: (bfi: IBfiAdmin) => void;
}

const useAdminBfiStore = create<IAdminBfiStoreType>((set) => ({
  bfi: {} as IBfiAdmin,
  setBfi: (bfi: IBfiAdmin) => set({ bfi }),
}));

export default useAdminBfiStore;
