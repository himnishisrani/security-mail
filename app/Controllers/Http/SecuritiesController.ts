import Mail from '@ioc:Adonis/Addons/Mail';
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Securitie from "App/Models/Securitie";

export default class SecuritiesController {
    /*
        Get all security records
    */
    public async index() {
        let securities = await Securitie.all()
        return securities
    }

    /*
        Store a security record
    */
    public async store(ctx: HttpContextContract) {
        let security = new Securitie()
        
        security['MOTION'] = ctx['request'].body()['MOTION']
        security['FIRE'] = ctx['request'].body()['FIRE']
        security['GAS'] = ctx['request'].body()['GAS']

        await security.save()


        try {
        console.log(security)
        // send mai
        await Mail.send(message => {
            message
                    .from('himnish54@gmail.com')
                    .to('2020.himnish.israni@ves.ac.in')
                    .subject('Security Alert')
                    .htmlView('emails/security', { security })
        })
    } catch(e) {
        console.error(e)
    }

        return security
    }
}
