import {TGoodsResponse, TTypesGoods } from "../Abstract/Types"

export class DBService {
    private domain = "https://polyteh.cis.by/cgi-bin/";

    async getTypesGoods(): Promise<TTypesGoods> {
        const responce = await fetch(
            this.domain + "is10_09?sSd_=0&sfil_n=2&svid_=3&sgr_l=160&sit_l=100&sgr_r=0&stst_=0&shead_=0&sadd_=5,86"
        );

        const data = (await responce.json()) as TTypesGoods;
        
        return data;
    }

    async getAllGoods(): Promise<TGoodsResponse> {
        const responce = await fetch(
            this.domain + "is10_09?sSd_=0&sfil_n=2&svid_=3&sgr_l=160&sit_l=110&sgr_r=0&stst_=0&shead_=0&sadd_=5,86,"
        );
        const data = (await responce.json()) as TGoodsResponse;
        console.log(data);
        
        return data;
    }

    async getGoodsByType(idGood: number): Promise<TGoodsResponse> {
        const responce = await fetch(
            this.domain + "is10_09?sSd_=0&sfil_n=2&svid_=3&sgr_l=160&sit_l=110&sgr_r=0&stst_=0&shead_=0&sadd_=5,86," + idGood
        );
        const data = (await responce.json()) as TGoodsResponse;
        console.log(data);
        
        return data;
    }
}