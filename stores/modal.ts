import { defineStore } from 'pinia'

export const useModalStore = defineStore('modals', {
    state: () => ({
        isShow: false,
        isInfoShow: false,
        isSummerCampShow: false,
        isInfoClosed: false,
        isCookieAccepted: false,
        isCalligraphyShow: false,
        cookieHeight: 0
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
        setIsCalligraphyShow(value: boolean) {
            this.isCalligraphyShow = value
        },
        setIsInfoClosed(value: boolean) {
            this.isInfoClosed = value
        },
        setIsCookieAccepted(value: boolean) {
            this.isCookieAccepted = value
        },
        setCookieHeight(height: number) {
            this.cookieHeight = height;
        }
    },
    getters: {
        getIsShow(): boolean {
            return this.isShow
        },
        getIsCalligraphyShow(): boolean {
            return this.isCalligraphyShow
        },
        getIsSummerCampShow(): boolean {
            return this.isSummerCampShow
        },
        getIsInfoShow(): boolean {
            return this.isInfoShow
        },
        getIsInfoClosed(): boolean {
            return this.isInfoClosed
        },
        getIsCookieAccepted(): boolean {
            return this.isCookieAccepted
        },
        getCookieHeight(): number {
            return this.cookieHeight
        },
    }
})
