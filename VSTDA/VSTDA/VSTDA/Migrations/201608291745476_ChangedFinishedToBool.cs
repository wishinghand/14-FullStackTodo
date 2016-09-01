namespace VSTDA.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class ChangedFinishedToBool : DbMigration
    {
        public override void Up()
        {
            AlterColumn("dbo.Todoes", "Completed", c => c.Boolean(nullable: false));
        }
        
        public override void Down()
        {
            AlterColumn("dbo.Todoes", "Completed", c => c.String());
        }
    }
}
