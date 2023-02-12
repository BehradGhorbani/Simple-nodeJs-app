const fs = require('fs')
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export class Migration {
    constructor() {
    }

    async createSampleData() {
        fs.readFile('./src/dbMigration/sampleData.sql', 'utf8', async (err: Error, data: string[]) => {
            try {
                data = data.toString()
                    .split('\n')
                    .filter((line: string) => line.indexOf('--') !== 0)
                    .join('\n')
                    .replace(/(\r\n|\n|\r)/gm, ' ') // remove newlines
                    .replace(/\s+/g, ' ') // excess white space
                    .split(';');
                for (const query of data) {
                    if(query) {
                        await prisma.$executeRawUnsafe(query)
                    }
                }
                await prisma.$disconnect();
                console.log("======( Sample data creation was successful )======")
            } catch (e) {
                console.log("sample data creation has been failed!! => ", e)
            }
        })
    }
}

