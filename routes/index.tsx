/** @jsx  */
import { Handlers, PageProps } from "https://deno.land/x/fresh@1.1.5/server.ts";

import { h } from "preact";
//import { tw } from "@twind";

export interface Prise {
  time: Time
  disclaimer: string
  chartName: string
  bpi: Bpi
}

export interface Time {
  updated: string
  updatedISO: string
  updateduk: string
}

export interface Bpi {
  USD: Usd
  GBP: Gbp
  EUR: Eur
}

export interface Usd {
  code: string
  symbol: string
  rate: string
  description: string
  rate_float: number
}

export interface Gbp {
  code: string
  symbol: string
  rate: string
  description: string
  rate_float: number
}

export interface Eur {
  code: string
  symbol: string
  rate: string
  description: string
  rate_float: number
}

const url = "https://api.coindesk.com/v1/bpi/currentprice.json";

export const handler: Handlers<Prise|null> = {
  async GET(_, ctx){
    const resp = await fetch(url);
    if ( resp.status === 200 ){
      const prise: Prise =  await resp.json();
      return ctx.render(prise);
    }
    return ctx.render(null);
  }
}

export default function Home({data}:PageProps<Prise|null>) {
  if( !data ){
    return (
      <h1>Data is not available!</h1>
    )
  }
  const breads = ['🥯','🍞','🥖','🥐'];
  const bread = breads[Math.floor( Math.random()*4)];

  return (
    <div class="p-4 h-screen w-screen bg-gray-900">
    <div class="p-4 mx-auto max-w-screen-md bg-gray-900">
      <img 
        src="/Bitcoin.svg"
        width={200}
        alt="the Bitcon logo"
        class="mx-auto"
      />
    </div>
    <p class="my-10 text(center 3xl white)">
      Bitcoin prise checker
    </p>
    <p class="my-10 text(center 2xl white)">
      USD: ${data.bpi.USD.rate}
    </p>
    <p class="my-10 text(center 2xl white)">
      EUR: ${data.bpi.EUR.rate}
    </p>
    <p class="my-10 text(center 2xl white)">
      GBP: ${data.bpi.GBP.rate}
    </p>
    <p class="my-10 text(center md white)">
      Last updated at : {data.time.updated}
      <p class="my-10 text(center md white)">Todays bread: {bread}</p>
    </p>
    </div>
  );
}
