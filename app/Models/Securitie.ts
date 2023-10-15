import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Securitie extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public MOTION: string

  @column()
  public FIRE: string

  @column()
  public GAS: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
