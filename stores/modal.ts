import { defineStore } from 'pinia'

export const useModalStore = defineStore('modals', {
    state: () => ({
        isShow: false
    }),
    actions: {
        setIsShow(value: boolean) {
            this.isShow = value
        }
    },
    getters: {
        getIsShow(): boolean {
            return this.isShow
        }
    }
})
