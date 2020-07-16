const elib = require("mechanical-warfare/effectlib");
const plib = require("mechanical-warfare/plib");
const wormlib = require("mechanical-warfare/units/worm-base");

const projGoogol = extendContent(UnitType, "project-googol", {
	load(){
		this.super$load();
		this.region = Core.atlas.find(this.name + "-head");
		this.bodyRegion = Core.atlas.find(this.name + "-body");
		this.tailRegion = Core.atlas.find(this.name + "-tail");
		this.cellRegion = Core.atlas.find(this.name + "-head-cell");
		this.cellBodyRegion = Core.atlas.find(this.name + "-body-cell");
		this.cellTailRegion = Core.atlas.find(this.name + "-tail-cell");
	},
	getReg(){
		return {
			head: this.region,
			body: this.bodyRegion,
			tail: this.tailRegion
		}
	},
	getCellReg(){
		return {
			head: this.cellRegion,
			body: this.cellBodyRegion,
			tail: this.cellTailRegion
		}
	},
	/*getBodyReg(){
		return this.bodyRegion;
	},
	getTailReg(){
		return this.tailRegion;
	},
	getCellReg(){
		return this.cellRegion;
	},
	getCellBodyReg(){
		return this.cellBodyRegion;
	},
	getCellTailReg(){
		return this.cellTailRegion;
	},*/
});

const googolBullet = extend(BasicBulletType, {});
googolBullet.keepVelocity = false;
googolBullet.damage = 12;
googolBullet.speed = 2.4;
googolBullet.lifetime = 90;

const googolBlaster = extendContent(Weapon, "googol-blaster", {
	load(){
		this.region = Core.atlas.find("clear");
	}
});
googolBlaster.reload = 30;
googolBlaster.bullet = googolBullet;

projGoogol.weapon = googolBlaster;
projGoogol.shootCone = 90;
projGoogol.create(prov(() => {
	unit = wormlib.newBase(15, 11, 0.1, 48);
	return unit;
}));
