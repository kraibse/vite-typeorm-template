<script setup lang="ts">
import UserComment from './UserComment.vue';
</script>

<template>
  <h1 class="text-left mb-4">The Addams Family</h1>

  <div class="text-left flex flex-col gap-y-1 pb-4">
    <div class="flex justify-start gap-x-1">
      <p class="rounded-full bg-slate-600 px-3 w-fit">Movie</p>
      <p class="rounded-full bg-slate-600 px-3 w-fit">2h 31m</p>
      <p class="rounded-full bg-green-600 px-3 w-fit">Completed</p>
    </div>
  </div>

    <div class="flex flex-row gap-x-2 w-full">
      <div class="h-40 w-full rounded bg-slate-600 my-4 h-80 max-w-40"></div>
      <div class="h-40 w-full rounded bg-slate-600 my-4 h-80 max-w-40"></div>
      <div class="h-40 w-full rounded bg-slate-600 my-4 h-80 max-w-40"></div>
  </div>

  <div class="text-left">
    <h2 class="text-xl">Description</h2>
    <p class="pt-2 leading-6 text-gray-400">
      Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor
      sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet
      consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur
      adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing
      elit.Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum
      dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet
      consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur
      adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor
      sit amet consectetur adipisicing elit.
    </p>
  </div>

  <div class="flex gap-x-2 mt-4">
    <button class="my-2 py-1 bg-indigo-600 rounded">Edit Details</button>
    <button class="my-2 py-1 bg-indigo-600 rounded">Update Status</button>
  </div>

  <hr class="my-8" />

  <div class="text-left">
    <h2 class="mb-4">Comment as <span class="">kraibse</span></h2>
    <textarea
      name=""
      id=""
      rows="10"
      class="w-full p-2"
      placeholder="Enter your comment"
    ></textarea>
    <button class="my-2 py-1 bg-indigo-600 rounded">Send comment</button>
  </div>

  <div id="commentlist" class="mt-8 flex flex-col gap-y-4 text-left">
    <h2>Comment Log</h2>

    <UserComment />
    <UserComment />
    <UserComment />
    <UserComment />
    <UserComment />

  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
