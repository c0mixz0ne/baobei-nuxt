import { defineStore } from 'pinia'

export const useModalStore = defineStore('modals', {
    state: () => ({
        isShow: false,
        isInfoShow: false,
        isSummerCampShow: false,
        isInfoClosed: false
    }),
    actions: {
        setIsShow(value: boolean) {
            this.isShow = value
        },
        setIsInfoShow(value: boolean) {
            this.isInfoShow = value
        },
        setIsSummerCampShow(value: boolean) {
            this.isSummerCampShow = value
        },
        setIsInfoClosed(value: boolean) {
            this.isInfoClosed = value
        }
    },
    getters: {
        getIsShow(): boolean {
            return this.isShow
        },
        getIsInfoShow(): boolean {
            return this.isInfoShow
        },
        getIsSummerCampShow(): boolean {
            return this.isSummerCampShow
        },
        getIsInfoClosed(): boolean {
            return this.isInfoClosed
        }
    }
})
