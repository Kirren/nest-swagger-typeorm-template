import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

(async () => {
    const app = await NestFactory.create(AppModule);

    const options = new DocumentBuilder()
        .setTitle("Requesters API")
        .setDescription("Requesters API description")
        .setVersion("1.0")
        .setBasePath("/api")
        .addTag("requesters")
        .setSchemes("https")
        .build();

    const document = SwaggerModule.createDocument(app, options);
    SwaggerModule.setup("api", app, document);

    await app.listen(3000);
})();
