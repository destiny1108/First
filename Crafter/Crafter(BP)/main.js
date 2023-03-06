import { world } from "@minecraft/server";
world.events.entityHit.subscribe(ev => {
  const entity = ev.entity;
  const hitEntity = ev.hitEntity;
  world.say("test")
  if ( entity.typeId == "minecraft:player" && hitEntity.entity.typeId == "crafter:crafter" ) {
    world.say(`${entity.typeId}`);
    world.say(`${hitEntity.entity.typeId}`);
    const inv = entity.getComponent("minecraft:inventory").container;
    world.say(`${inv.inventorySize}`);
    const hand = hitEntity.entity.getComponent("minecraft:inventory").container.getItem(hitEntity.entity.selectedSlot);
    if ( hand?.typeId == "crafter:crafting_rod" ) {
      world.say(`${hand.typeId}`);
      var inv_l;
      for ( var i = 0; i < inv.size; i++ ) { inv_l.push(inv.getItem(i).typeId) };
      world.say(`${inv_l}`);
    }
  }
})