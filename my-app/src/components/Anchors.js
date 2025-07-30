import React from 'react'

export default function Anchors() {
  return (
    <div>
 <div class="row">
  <div class="col-4">
    <div id="list-example" class="list-group">
      <a class="list-group-item list-group-item-action" href="#list-item-1">Creature Companions</a>
      <a class="list-group-item list-group-item-action" href="#list-item-2">Traveler's Log</a>
      <a class="list-group-item list-group-item-action" href="#list-item-3">Shop/Gear Up</a>
      <a class="list-group-item list-group-item-action" href="#list-item-4">Support</a>
    </div>
  </div>
  <div class="col-8">
    <div data-bs-spy="scroll" data-bs-target="#list-example" data-bs-smooth-scroll="true" class="scrollspy-example" tabindex="0">
      <h4 id="list-item-1"> – Adopt magical pets for your journey </h4>
      <p>...</p>
      <h4 id="list-item-2">Share or read fantasy travel stories</h4>
      <p>...</p>
      <h4 id="list-item-3">Get cloaks, potions, or enchanted gear</h4>
      <p>...</p>
      <h4 id="list-item-4">Speak to a wizard</h4>
      <p>...</p>
    </div>
  </div>
</div>
    </div>
  )
}
