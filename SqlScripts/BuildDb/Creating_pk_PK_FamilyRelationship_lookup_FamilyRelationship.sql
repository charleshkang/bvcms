ALTER TABLE [lookup].[FamilyRelationship] ADD CONSTRAINT [PK_FamilyRelationship] PRIMARY KEY CLUSTERED  ([Id]) ON [PRIMARY]
GO
IF @@ERROR <> 0 SET NOEXEC ON
GO
