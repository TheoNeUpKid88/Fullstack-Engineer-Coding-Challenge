package main

import (
  "log"
  "net/http"
)

func main() {
  fs := http.FileServer(http.Dir("./src"))
  http.Handle("/", fs)

  log.Println("Listening on :23456...")
  err := http.ListenAndServe(":23456", nil)
  if err != nil {
    log.Fatal(err)
  }
}