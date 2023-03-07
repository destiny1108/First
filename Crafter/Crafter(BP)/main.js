import { world } from "@minecraft/server";
world.events.entityHit.subscribe((ev) => {
  const { entity, hitEntity } = ev;
  if ( typeof hitEntity === "undefined" ) return; 
  world.say("test");
  if (
    entity.typeId == "minecraft:player" &&
    hitEntity.typeId == "crafter:crafter"
  ) {
    world.say(`${entity.typeId}`);
    world.say(`${hitEntity.typeId}`);
    const inv = entity.getComponent("inventory").container;
    world.say(`${inv.inventorySize}`);
    const hand = hitEntity.getComponent("inventory")
      .container.getItem(hitEntity.selectedSlot);
    if (hand?.typeId == "crafter:crafting_rod") {
      world.say(`${hand.typeId}`);
      var inv_l;
      for (var i = 0; i < inv.size; i++) {
        inv_l.push(inv.getItem(i).typeId);
      }
      world.say(`${inv_l}`);
    }
  }
});
