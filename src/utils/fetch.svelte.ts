import type { Commit } from "./types"
import { page } from "$app/stores"
import { get } from "svelte/store"

export async function getMessage(): Promise<Commit> {
  let hash = get(page).url.searchParams.get("hash")
  let response = await fetch(`https://whatthecommit.com/${hash != null ? hash : "index"}.json`, {
  })
  let message: Commit = await response.json()
  return message
}

