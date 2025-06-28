// "use client"
import {  getQueryClient,trpc } from "@/trpc/server";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { Client } from "./client";
import { Suspense } from "react";


export default  async function Home() {

  const queryClient=getQueryClient()
  void queryClient.prefetchQuery(trpc.createAi.queryOptions({text:"prsanjeet"
  }))
   


  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
    <div className="font-bold text-rose-500 text-2xl">
     
    <Suspense fallback={<div>Loading...</div>}></Suspense>
<Client/>
      
    </div>
    </HydrationBoundary>
  );
}
