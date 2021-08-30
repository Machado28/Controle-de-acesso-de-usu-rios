import { Column, CreateDateColumn, PrimaryGeneratedColumn } from 'typeorm';

abstract class ContentDates {
      @CreateDateColumn()
      createdAt: 'timestamp';

      @CreateDateColumn()
      updatedAt: 'timestamp';
}
abstract class ContentTemplate extends ContentDates {
      @PrimaryGeneratedColumn('uuid')
      id: string;

      @Column('varchar')
      name: string;

      @Column('varchar')
      description: string;
}

export { ContentDates, ContentTemplate };
