ALTER TABLE "questions" RENAME COLUMN "roomId" TO "roomid";--> statement-breakpoint
ALTER TABLE "questions" DROP CONSTRAINT "questions_roomId_rooms_id_fk";
--> statement-breakpoint
ALTER TABLE "questions" ADD CONSTRAINT "questions_roomid_rooms_id_fk" FOREIGN KEY ("roomid") REFERENCES "public"."rooms"("id") ON DELETE no action ON UPDATE no action;